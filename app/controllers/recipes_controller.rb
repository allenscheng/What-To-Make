class RecipesController < ApplicationController
  def index 
    response = Unirest.get("http://www.recipepuppy.com/api/?i=" + params[:search_term])
    p recipes = response.body
    render json: recipes
  end
end
