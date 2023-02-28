class UsersController < ApplicationController
  skip_before_action :authorize, only: [:create, :most_rentals, :index]

  def index
    render json: User.all
  end

  def create
    user = User.create!(user_params)
    session[:user_id] = user.id
    render json: user, status: :created
  end

  def show
    render json: @current_user
  end

  def most_rentals
    max_rentals = 0
    user = nil
    User.all.each do |u|
      if u.rentals.length > max_rentals
        max_rentals = u.rentals.length
        user = u
      end
    end
    render json: user
  end

  # user = User.all.sort_by{ |u| u.rentals.length }.first


  private

    def user_params
      params.permit(:username, :password, :password_confirmation)
    end

end
