class UsersController < ApplicationController
  before_action: authenticate_user

  def new
    @user = User.new
  end

  def create
    @user = User.new(user_params)
    if @user.save
      session[:user_id] = @user.id
      redirect_to root_path
    else
      raise params
      redirect_to new_user_path
    end
  end


  private

  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
