class RentalsController < ApplicationController
  before_action :authorize

  def index
    render json: Rental.all, only: :id, include: [:user, :movie, :store]
  end

  def show
    find_rental
    render json: @rental, only: :id, include: [:user, :movie, :store]
  end

  private

    def find_rental
      @rental = Rental.find_by(id: params[:id])
    end
end
