# 🚀 Narayani Market (Java) – AWS EC2 Deployment Guide

## Tech Stack
- **Java 17** + **Spring Boot 3.2** + **Thymeleaf**
- Builds to a single runnable **JAR file** (no separate server needed)
- Deploy behind **Nginx** on AWS EC2

---

## STEP 1 – Launch EC2 Instance

1. AWS Console → EC2 → **Launch Instance**
2. AMI: **Ubuntu Server 22.04 LTS** (Free Tier eligible)
3. Instance type: **t2.micro** (free tier) or t2.small for better performance
4. Create a **Key Pair** (.pem) — download and save it
5. Security Group – allow inbound:
   - Port **22** (SSH) from your IP
   - Port **80** (HTTP) from anywhere
   - Port **8080** (Spring Boot) from anywhere (testing only)
6. Launch the instance

---

## STEP 2 – Connect to EC2

```bash
chmod 400 your-key.pem
ssh -i your-key.pem ubuntu@<YOUR_EC2_PUBLIC_IP>
```

---

## STEP 3 – Install Java 17 on EC2

```bash
sudo apt update && sudo apt upgrade -y

# Install Java 17 (OpenJDK)
sudo apt install -y openjdk-17-jdk

# Verify
java -version
# Should print: openjdk version "17.x.x"
```

---

## STEP 4 – Install Maven on EC2

```bash
sudo apt install -y maven

# Verify
mvn -version
```

---

## STEP 5 – Upload & Build the Project

### Option A – SCP upload (from your local machine)
```bash
scp -i your-key.pem -r narayani-market-java/ ubuntu@<YOUR_EC2_PUBLIC_IP>:~/
```

### Option B – Git clone (recommended)
```bash
# On EC2:
sudo apt install -y git
git clone https://github.com/YOUR_USERNAME/narayani-market-java.git
cd narayani-market-java
```

### Build the JAR
```bash
cd ~/narayani-market-java
mvn clean package -DskipTests

# The JAR is now at:
ls target/narayani-market-1.0.0.jar
```

---

## STEP 6 – Test Run

```bash
java -jar target/narayani-market-1.0.0.jar
```

Open browser: `http://<YOUR_EC2_PUBLIC_IP>:8080`  
If the site loads ✅ — press `Ctrl+C` and continue to next step.

---

## STEP 7 – Run as a System Service (24/7)

```bash
# Create a systemd service file
sudo nano /etc/systemd/system/narayani-market.service
```

Paste this content:
```ini
[Unit]
Description=Narayani Market Spring Boot App
After=network.target

[Service]
User=ubuntu
WorkingDirectory=/home/ubuntu/narayani-market-java
ExecStart=/usr/bin/java -jar /home/ubuntu/narayani-market-java/target/narayani-market-1.0.0.jar
SuccessExitStatus=143
Restart=on-failure
RestartSec=10
StandardOutput=journal
StandardError=journal

[Install]
WantedBy=multi-user.target
```

```bash
# Enable and start the service
sudo systemctl daemon-reload
sudo systemctl enable narayani-market
sudo systemctl start narayani-market

# Check status
sudo systemctl status narayani-market

# View logs
sudo journalctl -u narayani-market -f
```

---

## STEP 8 – Install Nginx (Serve on Port 80)

```bash
sudo apt install -y nginx

sudo nano /etc/nginx/sites-available/narayani-market
```

Paste this config:
```nginx
server {
    listen 80;
    server_name YOUR_EC2_PUBLIC_IP;

    location / {
        proxy_pass         http://localhost:8080;
        proxy_http_version 1.1;
        proxy_set_header   Upgrade $http_upgrade;
        proxy_set_header   Connection 'upgrade';
        proxy_set_header   Host $host;
        proxy_set_header   X-Real-IP $remote_addr;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
sudo ln -s /etc/nginx/sites-available/narayani-market /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
sudo systemctl enable nginx
```

Website is now live at: `http://<YOUR_EC2_PUBLIC_IP>` 🎉

---

## STEP 9 – (Optional) Free HTTPS with Let's Encrypt

```bash
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d yourdomain.com -d www.yourdomain.com
sudo systemctl enable certbot.timer
```

---

## Useful Commands

```bash
# Restart app after code changes
mvn clean package -DskipTests
sudo systemctl restart narayani-market

# View live logs
sudo journalctl -u narayani-market -f

# Check if port 8080 is running
sudo ss -tlnp | grep 8080
```

---

## Project Structure

```
narayani-market-java/
├── pom.xml                              ← Maven build config
├── DEPLOY.md                            ← This guide
└── src/main/
    ├── java/com/narayanimarket/
    │   ├── NarayaniMarketApplication.java  ← App entry point
    │   ├── MarketController.java           ← Routes & page logic
    │   └── Product.java                    ← Product model
    └── resources/
        ├── application.properties          ← Server config
        ├── templates/
        │   └── index.html                  ← Thymeleaf HTML template
        └── static/
            ├── css/style.css               ← Stylesheet
            └── js/main.js                  ← JavaScript
```

---

**Website live at:** `http://<YOUR_EC2_PUBLIC_IP>` 🎉
