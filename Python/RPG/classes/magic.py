import random


class Spell:
    def __init__(self, name, cost, damage, types):
        self.name = name
        self.cost = cost
        self.damage = damage
        self.types = types

    def generate_damage(self):
        low = self.damage - 15
        high = self.damage + 15
        return random.randrange(low, high)

