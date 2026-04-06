# frozen_string_literal: true

Gem::Specification.new do |s|
  s.name          = "jekyll-theme-minimalist"
  s.version       = "0.1.0"
  s.license       = "CC0-1.0"
  s.authors       = ["Jiwoo Hong"]
  s.email         = ["jiwoo_hong@kaist.ac.kr"]
  s.homepage      = ""
  s.summary       = "Source package for Jiwoo Hong's personal Jekyll website"

  s.files         = Dir.glob("{_includes,_layouts,_sass,assets}/**/*") + ["LICENSE"]

  s.required_ruby_version = ">= 2.4.0"

  s.platform = Gem::Platform::RUBY
  s.add_runtime_dependency "jekyll", "> 3.5", "< 5.0"
  s.add_runtime_dependency "jekyll-seo-tag", "~> 2.0"
end
