import random


class Colors:
    HEADER = "\033[95m"
    BLUE = "\033[94m"
    GREEN = "\033[92m"
    WARNING = "\033[93m"
    FAIL = "\033[91m"
    END = "\033[0m"
    BOLD = "\033[1m"
    UNDERLINE = "\033[4m"


class Person:
    def __init__(self, hp, magic_points, attack, defence, magic):
        self.max_hp = hp
        self.hp = hp
        self.max_magic_points = magic_points
        self.magic_points = magic_points
        self.attack_low = attack - 10
        self.attack_high = attack + 10
        self.defence = defence
        self.magic = magic
        self.actions = ["Attack", "Magic"]

    def generate_damage(self):
        return random.randrange(self.attack_low, self.attack_high)

    def generate_spell_damage(self, index):
        magic_low = self.magic[index]["damage"] - 5
        magic_high = self.magic[index]["damage"] + 5
        return random.randrange(magic_low, magic_high)

    def take_damage(self, damage):
        self.hp -= damage
        if self.hp < 0:
            self.hp = 0
        return self.hp

    # Utilities
    def get_hp(self):
        return self.hp

    def get_max_hp(self):
        return self.max_hp

    def get_magic_points(self):
        return self.magic_points

    def get_max_magic_points(self):
        return self.max_magic_points

    def reduce_magic_points(self, cost):
        self.magic_points -= cost

    def get_spell_name(self, index):
        return self.magic[index]["name"]

    def get_spell_magic_points(self, index):
        return self.magic[index]["cost"]

    def choose_action(self):
        index = 1
        print("Action")
        for item in self.actions:
            print(str(index) + ":", item)
            index += 1

    def choose_magic(self):
        index = 1
        print("Magic")
        for spell in self.magic:
            print(str(index) + ":", spell["name"], "(cost:", str(spell["magic_points"])+")")
            index += 1
