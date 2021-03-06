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
      flash[:success] = "Successfully created a new feature!"
      redirect_to @feature
    else
      flash[:error] = "There was an error while creating a new feature!"
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
    feature_name = @feature.name
    if @feature.update(feature_params)
      flash[:success] = "Successfully updated #{feature_name}!"
      redirect_to @feature
    else
      flash[:error] = "There was an error while editing #{feature_name}!"
      render :edit
    end
  end

  def destroy
    feature_name = @feature.name
    if @feature.delete
      flash[:success] = "Successfully deleted #{feature_name}!"
      redirect_to features_path
    else
      flash[:error] = "There was an error while deleting #{feature_name}!"
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
