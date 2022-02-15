module "single-view-fe-prototype" {
  source      = "git::https://github.com/cloudposse/terraform-null-label.git?ref=cf38625a5dde227db04c9cfedc1327d610229fec"
  namespace   = "single-view"
  environment = terraform.workspace
  name        = "single-view-fe-prototype"

  tags = {
    Owner                  = "stephen.strudwick@madetech.com"
    ApplicationServiceName = "Single View"
  }
}
