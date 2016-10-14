
require 'fileutils'
require 'uri'
require 'curb'

source_image_folder = ARGV[0]
responses_folder=File.join(source_image_folder,"Responses")
FileUtils.mkdir_p(responses_folder)
file_pattern = File.join(source_image_folder,"*.{JPEG,JPG,jpg,jpeg,PNG,png,GIF,gif,BMP,bmp}")

uri = URI.parse("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories,Tags&details=Celebrities")

headers=["Content-Type: application/octet-stream", "Ocp-Apim-Subscription-Key: ef16492357394ee2b719b50fb10cd6c9" ]

Dir.glob(file_pattern).each do |file|
	puts " File: #{file}"
	file_ext=File.extname(file)
	file_name=File.basename(file,file_ext)
	curl = Curl::Easy.new("https://api.projectoxford.ai/vision/v1.0/analyze?visualFeatures=Categories,Tags&details=Celebrities")
	curl.headers=headers
	resp = curl.http_post(File.read(file))
	File.open(File.join(responses_folder,"#{file_name}.json"), "w") do |f|
		f << curl.body_str
	end
end

