class BadgesController < ActionController::API


  def index
    @teacher = Teacher.find(params[:id])

    @json = @teacher.badges.map do |badge|
      { id: badge.id, phrase: badge.phrase, votes: badge.votes}
    end
    render :json => @json
  end

  def vote
    @badge = Badge.find(params[:id])

    vote_type = params[:vote_type]
    if vote_type == 'up'
      upvote = @badge.votes + 1
      @badge.update_attributes(votes: upvote)
    else
      downvote = @badge.votes - 1
      @badge.update_attributes(votes: downvote)
    end
    render :json => @badge.votes
  end

  def create
    @teacher = Teacher.find(params[:user_id])
    @badge = Badge.new(phrase: params[:content], teacher_id: params[:user_id], votes: 0)
    if @badge.save
      render :json => @badge
    end
  end
end
