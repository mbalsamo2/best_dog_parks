class FeaturesController < ApplicationController

  def new
    # binding.pry
    @park = Park.find(params[:park_id])
    @feature = Feature.new
  end
end
