from classes.game import Person, Colors
from classes.magic import Spell

fire = Spell("Fire", 10, 100, "black")
thunder = Spell("Thunder", 10, 100, "black")
blizzard = Spell("Blizzard", 10, 100, "black")
meteor = Spell("Meteor", 20, 200, "black")
quake = Spell("Quake", 14, 140, "black")

cure = Spell("Cure", 12, 120, "white")
cureA = Spell("Cure", 18, 200, "white")

player = Person(460, 65, 60, 34, [fire, thunder, blizzard, meteor, cureA, cure])
enemy = Person(1200, 65, 45, 25, [])
running = True
index = 0

print(Colors.FAIL + Colors.BOLD + "AN ENEMY ATTACKS!" + Colors.END)

while running:
    print("======================")
    player.choose_action()
    choice = input("Choose action: ")
    index = int(choice) - 1

    if index == 0:
        damage = player.generate_damage()
        enemy.take_damage(damage)
        print("You attacked for", damage, "points of damage.")
    elif index == 1:
        player.choose_magic()
        magic_choice = int(input("Choose magic:")) - 1

        spell = player.magic[magic_choice]
        magic_damage = spell.generate_damage()

        current_magic_points = player.get_magic_points()

        if spell.cost > current_magic_points:
            print(Colors.FAIL + "\nNot enough MP\n" + Colors.END)
            continue

        player.reduce_magic_points(spell.cost)
        enemy.take_damage(magic_damage)
        print(Colors.BLUE + "\n" + spell.name + " deals", str(magic_damage), "points of damage" + Colors.END)

    enemy_choice = 1

    enemy_damage = enemy.generate_damage()
    player.take_damage(enemy_damage)
    print("Enemy attack for", enemy_damage)

    print("______________________________")
    print("Enemy HP: ", Colors.FAIL + str(enemy.get_hp()) + "/" + str(enemy.get_max_hp()) + Colors.END + "\n")

    print("Your HP:", Colors.GREEN + str(player.get_hp()) + "/" + str(player.get_max_hp()) + Colors.END)
    print("Your MP:", Colors.BLUE + str(player.get_magic_points()) + "/" + str(player.get_max_magic_points()) + Colors.END + "\n")

    if enemy.get_hp() == 0:
        print(Colors.GREEN + "You win!" + Colors.END)
        running = False
    elif player.get_hp() == 0:
        print(Colors.FAIL + "Your enemy has defeated you!" + Colors.END)
        running = False

