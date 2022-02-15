resource "aws_s3_bucket" "single-view-fe-prototype" {
  bucket = "single-view-fe-prototype"
  tags   = module.single-view-fe-prototype.tags
  acl    = "private"

  website {
    index_document = "index.html"
    error_document = "error.html"
  }
}

data "aws_iam_policy_document" "s3_policy" {
  statement {
    actions   = ["s3:GetObject"]
    resources = ["${aws_s3_bucket.single-view-fe-prototype.arn}/*"]

    principals {
      type        = "AWS"
      identifiers = [aws_cloudfront_origin_access_identity.oai.iam_arn]
    }
  }
}

resource "aws_s3_bucket_policy" "s3_policy" {
  bucket = aws_s3_bucket.single-view-fe-prototype.id
  policy = data.aws_iam_policy_document.s3_policy.json
}
