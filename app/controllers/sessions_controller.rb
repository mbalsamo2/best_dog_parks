class SessionsController < ApplicationController
  # before_action :authenticate_user, only: [:create]

  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth_hash)
      session[:user_id] = @user.id
      redirect_to parks_path
    else
      @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        redirect_to parks_path
      else
        redirect_to login_path
      end
    end
    # if auth_hash = request.env["omniauth.auth"]
    #   oauth_email = request.env["omniauth.auth"]["info"]["email"]
    #   if @user = User.find_by(email: oauth_email)
    #     session[:user_id] = @user.id
    #     redirect_to parks_path
    #   else
    #     oauth_name = request.env["omniauth.auth"]["info"]["first_name"]
    #     @user = User.create(name: oauth_name, email: oauth_email, password: SecureRandom.hex)
    #     session[:user_id] = @user.id
    #     redirect_to parks_path
    #   end
    # else
    #   @user = User.find_by(email: params[:email])
    #   if @user && @user.authenticate(params[:password])
    #     session[:user_id] = @user.id
    #     redirect_to parks_path
    #   else
    #     redirect_to login_path
    #   end
    # end
  end

  def destroy
    reset_session
    redirect_to root_path
  end

end
