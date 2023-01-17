class RentalsController < ApplicationController
  before_action :authorize

  def index
    render json: @current_user.rentals.all, include: [:movie, :store]
  end

  def show
    find_rental
    render json: @rental, only: :id, include: [:user, :movie, :store]
  end

  def create
    rental = Rental.create!(rental_params)
    render json: rental, status: :created
  end

  def destroy
    find_rental
    @rental.destroy
    
  end

  private

    def find_rental
      @rental = Rental.find_by(id: params[:id])
    end

    def rental_params
      params.permit(:user_id, :movie_id, :store_id)
    end
end
