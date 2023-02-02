class ApplicationController < ActionController::API
  include ActionController::Cookies
  rescue_from ActiveRecord::RecordInvalid, with: :render_422
  before_action :authorize

  # def hello_world
  #   session[:count] = (session[:count] || 0) + 1
  #   render json: { count: session[:count] }
  # end

  # def logged_in?
  #   !!session[:user_id]
  # end

  # def current_user
  #   @current_user = User.find_by_id(session[:user_id]) if logged_in?
  # end

  private

    def authorize
      @current_user = User.find_by(id: session[:user_id])
      render json: { errors: ["User not authorized."] }, 
      status: :unauthorized unless @current_user
    end

    def render_422(exception)
      render json: { errors: [exception.record.errors.full_messages] }, status: 422
    end

end
