class StoresController < ApplicationController

  def index
    render json: Store.all, only: [:id, :address], include: [:movies]
  end

  def show
    find_store
    render json: @store, only: [:id, :address], include: :movies
  end

  private

    def find_store
      @store = Store.find_by(id: params[:id])
    end

end
