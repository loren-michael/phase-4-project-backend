class RentalsController < ApplicationController
  before_action :authorize

  def index
    render json: @current_user.rentals.all # //, include: [:movie, :store]
  end

  def show
    find_rental
    render json: @rental, only: :id, include: [:user, :movie, :store]
  end

  def create
    # verify_availability
    find_movie
    rental = @current_user.rentals.create!(user_id: @current_user.id, movie_id: @movie.id, store_id: @movie.store_id)
    render json: rental, status: :created
  end

  def destroy
    find_rental
    @rental.destroy
    render json: @current_user.rentals.all, include: [:movie, :store]
  end

  private

    def find_rental
      @rental = Rental.find_by(id: params[:id])
    end

    def rental_params
      params.permit(:user_id, :movie_id, :store_id)
    end

    def find_movie
      @movie = Movie.find_by(id: params[:movie_id])
    end

    # def verify_availability
    #   find_movie
    #   @movie.availability == false ? render json: {error: "Movie not available"}, status: :unprocessable_entity : 
    # end
end
