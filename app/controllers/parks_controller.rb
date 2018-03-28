class ParksController < ApplicationController
  before_action :authenticate_user, only: [:index]

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
    @park = Park.find(params[:id])
  end


  private

  def park_params
    params.require(:park).permit(:name, :location, :user_id)
  end
end
