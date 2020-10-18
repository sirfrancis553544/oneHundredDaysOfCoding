import tkinter as tk
from tkinter.ttk import *

from time import strftime

root = tk.Tk()
root.title("Digital Clock")


def clock():
    tick = strftime("%H:%M:%S %p")
    label.config(text=tick)

    label.after(1000, clock)


label = Label(root, font=("sans", 80), background="black", foreground="blue")

label.pack(anchor='center')

clock()
root.mainloop()

