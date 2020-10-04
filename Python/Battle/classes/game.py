import random


class Colors:
    HEADER = "\033[95m"
    BLUE = "\033[94m"
    GREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    END = "\033[0m"
    BLOCK = "\033[1m"
    UNDERLINE = "\033[4m"


class Person:
    def __init__(self, hp, mana_points, attack, defence, magic):
        self.max_hp = hp
        self.hp = hp
        self.max_magic_power = mana_points
        self.magic_power = mana_points
        self.attack_low = attack - 10
        self.attack_high = attack + 10
        self.defence = defence
        self.magic = magic
        self.actions = ["attack", "Magic"]

    def generate_damage(self):
        return random.randrange(self.attack_low, self.attack_high)
