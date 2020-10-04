import random


class Enemy:
    hp = 200

    def __init__(self, attack_low, attack_high):
        self.attack_low = attack_low
        self.attack_high = attack_high

    def get_attack(self):
        print("Attack is", self.attack_low)

    def get_hp(self):
        print("Hp is", self.hp)


enemy_1 = Enemy(40, 50)
enemy_1.get_attack()
enemy_1.get_hp()

enemy_2 = Enemy(75, 90)
enemy_2.get_attack()
enemy_2.get_hp()


# player_hp = 400
# enemy_attack = 80
# enemy_attack_low = 60
#
# while player_hp > 0:
#     damage = random.randrange(enemy_attack_low, enemy_attack)
#     player_hp = player_hp - damage
#
#     if player_hp <= 30:
#         player_hp = 30
#     print("Enemy strikes for", damage, "points of damage. Current HP is", player_hp)
#
#     if player_hp > 30:
#         continue
#
#     print("You have low health, you have been moved to a safe zone!")
#     break
