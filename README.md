These are interview-style answers that sound like an experienced DevOps engineer explaining what they do in real projects, rather than textbook definitions.
Q1. What is Terraform and how does it work?
Answer:
Terraform is an Infrastructure as Code (IaC) tool from HashiCorp. Instead of creating resources manually in AWS, Azure, or GCP, we write code and let Terraform create them.
For example, if I need a VPC, EC2, Security Group, and Load Balancer, I write everything in .tf files. Terraform compares my code with the actual cloud environment and creates only the missing resources.
The workflow is usually:
Write Terraform code
Run terraform init
Run terraform plan
Review changes
Run terraform apply
Q2. What is the difference between Terraform and CloudFormation?
Answer:
CloudFormation works only with AWS.
Terraform supports multiple cloud providers like AWS, Azure, GCP, Kubernetes, GitHub, VMware, etc.
In my projects, if everything is AWS-only, CloudFormation is fine.
But if I'm managing AWS infrastructure along with Kubernetes, GitHub repositories, or Cloudflare DNS, Terraform is a better choice because everything can be managed from one tool.
Q3. What language does Terraform use and what is HCL?
Answer:
Terraform uses HCL (HashiCorp Configuration Language).
It's a simple, human-readable language.
Instead of writing lengthy JSON, we write blocks like:
resource
provider
variable
output
It is easy to understand and maintain.
Q4. What is a Terraform provider and how do you configure one?
Answer:
A provider is basically a plugin that allows Terraform to communicate with a platform.
For AWS, we use the AWS provider.
Example:
provider "aws" {
  region = "ap-south-1"
}
When Terraform runs, it uses this provider to call AWS APIs and create resources.
Q5. Walk me through what happens when you run terraform init.
Answer:
terraform init is the first command we run.
It performs three main tasks:
Downloads required providers
Downloads modules (if used)
Initializes the backend (like S3)
Without running terraform init, Terraform cannot communicate with AWS.
Q6. What is the Terraform state file and why is it important?
Answer:
The state file (terraform.tfstate) stores information about all the resources Terraform created.
Terraform doesn't query AWS every time.
Instead, it compares:
Desired configuration (.tf)
Current state (.tfstate)
This comparison helps Terraform know what needs to be created, updated, or deleted.
Without the state file, Terraform loses track of the infrastructure.
Q7. What is remote state and why is it necessary for teams?
Answer:
By default, the state file is stored locally.
In teams, that's not practical because everyone would have different state files.
So we store it remotely, usually in an S3 bucket.
Benefits:
Shared state
Backup
Team collaboration
CI/CD access
Usually, we use:
S3 → State storage
DynamoDB → State locking
Q8. What is state locking in Terraform?
Answer:
State locking prevents two people from modifying the same infrastructure at the same time.
For example:
If I'm running terraform apply and another engineer also runs it, both may update the same state file, causing corruption.
Using DynamoDB locking, only one person can modify the state at a time.
The second person waits until the lock is released.
Q9. What is terraform state command and when do you use it?
Answer:
The terraform state command is used to inspect or manage the Terraform state file.
Examples:
List resources
Remove resources from state
Move resources
Show resource details
Example:
terraform state list
terraform state show aws_instance.web
terraform state rm aws_instance.web
I mostly use it during migrations or when fixing state-related issues.
Q10. What is terraform import and when would you use it?
Answer:
Suppose someone manually created an EC2 instance in AWS.
Terraform doesn't know about it.
Instead of deleting and recreating it, we import it.
Example:
terraform import aws_instance.web i-123456789
Now Terraform starts managing that existing resource.
Q11. Difference between terraform plan and terraform apply
Answer:
terraform plan
Shows what Terraform is going to do.
Nothing changes in AWS.
terraform apply
Actually performs those changes.
In production, we always review the plan before applying.
Q12. What are Terraform modules?
Answer:
A module is simply reusable Terraform code.
Instead of writing VPC code 10 times, I write it once as a module.
Whenever I need another VPC, I just call that module.
It keeps the code clean and reusable.
Q13. What are Terraform variables?
Answer:
Variables make Terraform code reusable.
Instead of hardcoding values like:
Region
Instance type
AMI
Environment
I pass them as variables.
This allows me to use the same code for Dev, QA, and Production.
Q14. What are Terraform outputs?
Answer:
Outputs display useful information after deployment.
Example:
EC2 Public IP
VPC ID
Load Balancer DNS
These outputs can also be used by other Terraform modules.
Q15. What are data sources?
Answer:
Data sources read existing resources.
They don't create anything.
Example:
If my VPC already exists, I can fetch its ID using a data source instead of hardcoding it.
Q16. What is lifecycle meta-argument?
Answer:
Lifecycle controls how Terraform handles resources.
Common ones:
create_before_destroy
prevent_destroy
ignore_changes
For example, if tags are updated manually by another team, I use ignore_changes so Terraform doesn't overwrite them.
Q17. Difference between count and for_each
Answer:
count
Used when creating identical resources.
Example:
Three EC2 instances.
for_each
Used when each resource has a unique name or configuration.
Example:
Different security groups or IAM users.
I usually prefer for_each because it's easier to manage.
Q18. What are workspaces?
Answer:
Workspaces allow multiple environments using the same Terraform code.
Example:
Dev
QA
Production
Each workspace has its own separate state file.
Q19. What are locals?
Answer:
Locals store calculated or commonly used values.
Instead of repeating the same expression multiple times, I store it once in locals.
It improves readability.
Q20. How do you handle secrets?
Answer:
I never hardcode secrets in Terraform code.
Instead I use:
AWS Secrets Manager
AWS SSM Parameter Store
Environment variables
CI/CD secret manager
Sensitive variables are marked as sensitive = true.
Q21. What is terraform taint?
Answer:
Earlier, terraform taint marked a resource for recreation.
Now it's deprecated.
The modern command is:
terraform apply -replace=aws_instance.web
This recreates only that resource.
Q22. What is Terraform drift?
Answer:
Drift happens when someone manually changes resources in AWS after Terraform created them.
Example:
Terraform created an EC2 instance as t3.micro.
Someone manually changed it to t3.medium.
Terraform code still says t3.micro.
That's drift.
We detect it using:
terraform plan
Terraform shows the differences.
Then we either:
Accept the manual change and update code
Or apply Terraform to restore the desired configuration.
Q23. How do you structure Terraform code for a large project?
Answer:
I usually separate code into modules.
Example:
modules/
vpc
ec2
security-group
alb
rds
Then environments:
dev
qa
prod
Each environment has its own backend, variables, and state.
This keeps the project organized.
Q24. How do you use Terraform in a CI/CD pipeline?
Answer:
Typical pipeline:
Checkout code
Terraform Init
Terraform Format Check
Terraform Validate
Terraform Plan
Manual approval (Production)
Terraform Apply
This ensures infrastructure changes are reviewed before deployment.
Q25. What is Terragrunt?
Answer:
Terragrunt is a wrapper around Terraform.
It helps reduce duplicate code.
For example, instead of writing backend configuration in every project, Terragrunt manages it centrally.
It's commonly used in large organizations with many environments.
Q26. How do you test Terraform code?
Answer:
I usually perform:
terraform fmt
terraform validate
terraform plan
In CI/CD, these run automatically.
For complex infrastructure, teams may also use tools like Terratest.
Q27. What is Terraform Cloud / Enterprise?
Answer:
Terraform Cloud is HashiCorp's managed platform for Terraform.
Features:
Remote state
State locking
Team collaboration
Policy enforcement
Remote execution
Workspace management
Enterprise provides additional features for large organizations.
Q28. What is terraform fmt?
Answer:
It automatically formats Terraform code.
It keeps indentation and spacing consistent.
Most teams enforce it in CI/CD so everyone's code follows the same format.
Q29. How do you roll back infrastructure changes?
Answer:
Terraform doesn't have a direct rollback button.
If a deployment causes issues:
Revert the Terraform code in Git.
Run terraform plan.
Run terraform apply.
Terraform brings the infrastructure back to the previous desired state.
Q30. Common Terraform best practices
Answer:
Some practices I follow:
Use remote state with S3.
Enable state locking using DynamoDB.
Use modules for reusable code.
Don't hardcode values.
Never store secrets in code.
Store code in Git.
Run terraform fmt and terraform validate.
Review terraform plan before applying.
Use CI/CD for deployments.
Keep separate state files for Dev, QA, and Production.
Q31. I created resources manually in the cloud. I want Terraform to track them. How do you do that?
Answer:
In real projects, we don't delete and recreate manually created resources because it can cause downtime.
Instead, we:
Write the Terraform resource block for the existing resource.
Run:
terraform import <resource_type.resource_name> <resource_id>
Example:
terraform import aws_instance.web i-0123456789abcdef
After importing, run:
terraform plan
Terraform may still show differences because the code doesn't exactly match the existing resource. Update the .tf file until terraform plan shows No changes.
Now Terraform fully manages that resource.
Q32. Important Terraform commands
Command
Purpose
terraform init
Initialize Terraform project
terraform fmt
Format code
terraform validate
Validate syntax
terraform plan
Preview changes
terraform apply
Apply infrastructure changes
terraform destroy
Delete infrastructure
terraform show
Display state information
terraform output
Show output values
terraform state list
List managed resources
terraform state show
Show details of a resource in state
terraform state rm
Remove a resource from state without deleting it
terraform import
Import an existing resource into Terraform state
terraform refresh (legacy; now handled during plan/apply in newer versions)
Refresh state from the real infrastructure
terraform workspace list
List workspaces
terraform workspace new
Create a workspace
terraform workspace select
Switch workspace
terraform providers
Show providers used
terraform graph
Generate a dependency graph
terraform apply -replace=<resource>
Recreate a specific resource