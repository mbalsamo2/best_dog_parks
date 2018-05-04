class ParksController < ApplicationController
  before_action :authenticate_user
  before_action :current_park, only: %i[show edit update destroy]

  def index
    @parks = current_user.parks
    respond_to do |format|
      format.html { render :index }
      format.json { render json: @parks }
    end
  end

  def new
    @park = Park.new
  end

  def create
    @park = Park.new(park_params)
    @park.user_id = current_user.id
    if @park.save
      flash[:success] = "Successfully created a new park!"
      redirect_to @park
    else
      flash[:error] = "There was an error while creating a new park!"
      render :new
    end
  end

  def show
    @feature = @park.features.build
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @park }
    end
  end

  def edit
    if current_park
      render :edit
    else
      redirect_to parks_path
    end
  end

  def update
    park_name = @park.name
    if @park.update(park_params)
      flash[:success] = "Successfully updated #{park_name}!"
      redirect_to @park
    else
      flash[:error] = "There was an error while editing #{park_name}!"
      render :edit
    end
  end

  def destroy
    park_name = @park.name
    if @park.delete
      flash[:success] = "Successfully deleted #{park_name}!"
      redirect_to parks_path
    else
      flash[:error] = "There was an error while deleting #{park_name}!"
      render :show
    end
  end

  def favorites
    @favorites = current_user.favorite_parks
  end

  def feature_index
    @park = Park.find(params[:park_id])
    respond_to do |format|
      format.html { render :show }
      format.json { render json: @park.features }
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
