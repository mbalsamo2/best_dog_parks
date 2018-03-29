class SessionsController < ApplicationController

  def new
  end

  def create
    if auth_hash = request.env["omniauth.auth"]
      @user = User.find_or_create_by_omniauth(auth_hash)
      session[:user_id] = @user.id
      flash[:success] = "Successfully signed in!"
      redirect_to parks_path
    else
      @user = User.find_by(email: params[:email])
      if @user && @user.authenticate(params[:password])
        session[:user_id] = @user.id
        flash[:success] = "Successfully signed in!"
        redirect_to parks_path
      else
        flash[:error] = "There was an error while signing in!"
        redirect_to login_path
      end
    end
  end

  def destroy
    reset_session
    flash[:success] = "Successfully logged out!"
    redirect_to root_path
  end

end
