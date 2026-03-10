class GameState:
    def __init__(self):
        self.state = 'initial'

    def start_game(self):
        self.state = 'playing'
        # Additional logic for starting the game

    def pause_game(self):
        self.state = 'paused'

    def end_game(self):
        self.state = 'ended'
