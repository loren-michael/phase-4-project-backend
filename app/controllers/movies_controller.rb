class MoviesController < ApplicationController
  # skip_before_action :authorize, only: [:index, :show]
  
  def index
    movies = Movie.all
    render json: movies, include: [:store]
  end

  def create
    movie = Movie.create!(movie_params)
  end

  def show
    find_movie
    render json: @movie
  end

  def destroy
    find_movie
    @movie.destroy
    redner json: { message: "Movie has been removed." }, status: :accepted
  end

  private

    def find_movie
      @movie = Movie.find_by(id: params[:id])
    end

    def movie_params
      params.permit(:title, :poster_url, :mpaa, :year, :runtime, :synopsis, :availability, :store_id)
    end
end
