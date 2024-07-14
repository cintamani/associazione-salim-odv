# require 'dynamoid'

# DYNAMO_NAMESPACE = ENV['DYNAMO_NAMESPACE'] || "associazionesalim_app_#{Rails.env}"

# Dynamoid.configure do |config|
#   config.region = ENV['DYNAMO_DB_REGION']

#   # To namespace tables created by Dynamoid from other tables you might have.
#   # Set to nil to avoid namespacing.
#   config.namespace = DYNAMO_NAMESPACE

#   if ENV['AWS_ENDPOINT']
#     # [Optional]. If provided, it communicates with the DB listening at the endpoint.
#     # This is useful for testing with [DynamoDB Local] (http://docs.aws.amazon.com/amazondynamodb/latest/developerguide/Tools.DynamoDBLocal.html).
#     config.endpoint = ENV['AWS_ENDPOINT']
#   else
#     config.credentials = Aws::AssumeRoleCredentials.new(
#       region: ENV['AWS_REGION'],
#       access_key_id: ENV['AWS_KEY'],
#       secret_access_key: ENV['AWS_SECRET'],
#       # role_arn: role_arn,
#       # role_session_name: 'our-session'
#     )
#   end
# end
