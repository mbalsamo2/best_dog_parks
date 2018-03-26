class UsersController < ApplicationController

  def new
    @user = User.new
  end

  def create
    @user = User.new
    @user.name = params[:user][:name]
    @user.email = params[:user][:email]
    @user.password_digest = params[:user][:password_digest]
    # @user.save

    if @user.save
      redirect_to root_path
    else
      render :new
    end
    # raise errors
  end

end
