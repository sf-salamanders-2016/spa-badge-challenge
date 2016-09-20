class Badge < ActiveRecord::Base
  belongs_to :teacher

  def votes(vote_type)
    if vote_type == 'up'
      self.value += 1
    else
      self.value -= 1
    end
  end

end
