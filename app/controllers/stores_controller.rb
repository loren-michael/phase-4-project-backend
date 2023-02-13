class StoresController < ApplicationController
  # skip_before_action :authorize, only: [:index]

  def index
    render json: Store.all, include: [:movies]
  end

  def create
    Store.create!(store_params)
    render json: Store.all, only: [:id, :address]
  end

  def show
    find_store
    render json: @store, only: [:id, :address], include: :movies
  end

  private

    def find_store
      @store = Store.find_by(id: params[:id])
    end

    def store_params
      params.permit(:address)
    end

end
