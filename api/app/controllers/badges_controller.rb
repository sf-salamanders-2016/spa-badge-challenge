class BadgesController < ActionController::API

  def create
    @badge = Badge.new(params)
    if @badge.save
      redirect_to @teachers
    else
      render 'new' #What the hell...?
    end
  end

  def update
    @badge = Badge.find(params[:id])
    # params[:vote_type] = 'up' or 'down'
    @badge.votes(params[:vote_type])
    @badge.save
    redirect_to @teachers
  end

end
