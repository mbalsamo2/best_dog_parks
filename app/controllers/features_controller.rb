class FeaturesController < ApplicationController
  before_action :authenticate_user
  before_action :current_feature, only: %i[show edit update destroy]
  before_action :current_park, only: %i[new create]

  def index
    @features = current_user.features
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @feature }
    end
  end

  def new
    @feature = @park.features.build
    render :layout => false
  end

  def create
    # binding.pry
    @feature = Feature.new(feature_params)
    @feature.park_ids = params[:park_id]
    if @feature.save
      flash[:success] = "Successfully created a new feature!"
      redirect_to @park
    else
      flash[:error] = "There was an error while creating a new feature!"
      render :new
    end
  end

  def show
    @feature = Feature.find(params[:id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @feature }
    end
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

  def current_park
    @park = Park.find(params[:park_id])
  end
end
