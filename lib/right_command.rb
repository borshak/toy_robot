class RightCommand

  def get_new_position(current_position)
    Position.new(current_position.x, current_position.y, current_position.direction_right)
  end

end
