OmniAuth.config.logger = Rails.logger

Rails.application.config.middleware.use OmniAuth::Builder do
  provider :google_oauth2, '693074230624-fmj15uok2ufcbt18ls61gmvq77eehthq.apps.googleusercontent.com', 'ekPZdpv6aNhH0e3H6EnJzlOV', {client_options: {ssl: {ca_file: Rails.root.join("cacert.pem").to_s}}}
end
