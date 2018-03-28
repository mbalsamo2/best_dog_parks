class ParksController < ApplicationController
  before_action :authenticate_user, only: [:index]

  def index
    @parks = current_user.parks
  end
end
