# frozen_string_literal: true

module API
  class PostsController < ApplicationController
    @@posts
    def index
      render json: { posts: posts }
    end

    def create
      @@posts.push(params[:post][:title])
      render json: { posts: posts }
    end

    private

    def posts
      @@posts ||= ['Post 1', 'Post 2']
    end
  end
end
