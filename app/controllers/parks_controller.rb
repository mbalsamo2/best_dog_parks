class ParksController < ApplicationController
  before_action :authenticate_user
  before_action :current_park, only: %i[show edit update destroy]

  def index
    @parks = current_user.parks
  end

  def new
    @park = Park.new
  end

  def create
    @park = Park.new(park_params)
    @park.user_id = current_user.id
    if @park.save
      redirect_to @park
    else
      render :new
    end
  end

  def show
  end

  def edit
    if current_park
      render :edit
    else
      redirect_to parks_path
    end
  end

  def update
    if @park.update(park_params)
      redirect_to @park
    else
      render :edit
    end
  end

  def destroy
    park_name = @park.name
    if @park.delete
      redirect_to parks_path
    else
      render :show
    end
  end

  private

  def park_params
    params.require(:park).permit(:name, :location, :user_id, feature_ids:[], features_attributes: %i[name rating comment])
  end

  def current_park
    @park = Park.find(params[:id])
  end
end
