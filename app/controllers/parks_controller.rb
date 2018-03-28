class ParksController < ApplicationController

  def index
    @parks = current_user.parks
  end
end
