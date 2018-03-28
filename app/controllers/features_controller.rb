class FeaturesController < ApplicationController
  before_action :authenticate_user
  before_action :current_feature, only: %i[show edit update destroy]

  def index
    @features = current_user.features
  end

  def new
    @park = Park.find(params[:park_id])
    @feature = @park.features.build
  end

  def create
    @feature = Feature.new(feature_params)
    @feature.park_ids = params[:park_id]
    if @feature.save
      redirect_to @feature
    else
      render :new
    end
  end

  def show
  end

  def edit
    if current_feature
      render :edit
    else
      redirect_to features_path
    end
  end

  def update
    if @feature.update(feature_params)
      redirect_to @feature
    else
      render :edit
    end
  end

  def destroy
    feature_name = @feature.name
    if @feature.delete
      redirect_to features_path
    else
      render :show
    end
  end

  private

  def feature_params
    params.require(:feature).permit(:name, :rating, :comment)
  end

  def current_feature
    @feature = Feature.find(params[:id])
  end
end
