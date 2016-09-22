class BadgesController < ApplicationController

  def create
    @badge = Badge.new(params[:badge])
    if @badge.save
      render json: {data: @badge, url: '/'}
    else
      render json: {data: @badge.errors, url: '/'}
    end
  end

  def update
    @badge = Badge.find(params[:id])
    @badge.votes(params[:vote_type])
    @badge.save
    render json: {data: @badge, url: '/'}
  end

end
