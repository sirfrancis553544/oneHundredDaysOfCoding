from classes.game import Person, Colors

magic = [{"name": "Fire", "cost": 10, "damage": 60},
         {"name": "Thunder", "cost": 10, "damage": 80},
         {"name": "Blizzard", "cost": 10, "damage": 60}]

player = Person(460, 65, 60, 34, magic)
enemy = Person(1200, 65, 45, 25, magic)
running = True
index = 0

print(Colors.FAIL + Colors.BOLD + "AN ENEMY ATTACKS!" + Colors.END)

while running:
    print("======================")
    player.choose_action()
    choice = input("Choose action: ")
    index = int(choice) -1

    if index == 0:
        damage = player.generate_damage()
        enemy.take_damage(damage)
        print("You attacked for", damage, "points of damage. Enemy HP:", enemy.get_hp())

    enemy_choice = 1

    enemy_damage = enemy.generate_damage()
    player.take_damage(enemy_damage)
    print("Enemy attack for", enemy_damage, "Player HP", player.get_hp())

    if enemy.get_hp() == 0:
        print(Colors.GREEN + "You win!" + Colors.END)
        running = False
    elif player.get_hp() == 0:
        print(Colors.FAIL + "Your enemy has defeated you!" + Colors.END)
        running = False
    
