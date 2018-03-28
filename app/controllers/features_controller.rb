class FeaturesController < ApplicationController

  def new
    @park = Park.find(params[:park_id])
    @feature = @park.features.build
  end

  def create
    # binding.pry
    @feature = Feature.new(feature_params)
    @feature.park_ids = params[:park_id]
    if @feature.save
      redirect_to @feature
    else
      render :new
    end
  end

  def show
    @feature = Feature.find(params[:id])
  end

  private

  def feature_params
    params.require(:feature).permit(:name, :rating, :comment)
  end
end
