import tkinter as tk
from tkinter import filedialog, Text
import os

#  root holds the entire frame like in html
root = tk.Tk()
apps = []

# makes sure text file doesn't save blanks
if os.path.isfile("save.txt"):
    with open("save.txt", "r") as f:
        tempApps = f.read()
        tempApps = tempApps.split(",")
        apps = [x for x in tempApps if x.strip()]


#  adds the specific file format to root
def add_app():
    # removes duplicates when adding a new file to list
    for widget in frame.winfo_children():
        widget.destroy()

    filename = filedialog.askopenfilename(initialdir="/", title="Select File", filetype=(("executables", "*.exe"), ("all files", "*.*")))
    # adds the filename to the app array
    apps.append(filename)
    print(filename)
    for i in apps:
        label = tk.Label(frame, text=i, bg="gray")
        # Pack() sends the element to the root screen, allows it to be visible
        label.pack()


# run app function
def run_apps():
    for app in apps:
        os.startfile(app)


def remove():
    apps.pop(0)


# canvas is the main frame of the application
canvas = tk.Canvas(root, height=500, width=500, bg="#263D42")
canvas.pack()

# frame added inside canvas
frame = tk.Frame(root, bg="white")
frame.place(relwidth=0.8, relheight=0.7, relx=0.1, rely=0.1)

# open file button, it hols the add_app "command" button that allows it to function
openFile = tk.Button(root, text="Open File", padx=10, pady=5, fg="white", bg="#263D42", command=add_app)
openFile.pack(padx=5, pady=10, side=tk.LEFT)

# run apps button, it hols the run_apps "command" button that allows it to function
runApp = tk.Button(root, text="Run App", padx=10, pady=5, fg="white", bg="#263D42", command=run_apps)
runApp.pack(padx=5, pady=20, side=tk.LEFT)

# run apps button, it hols the run_apps "command" button that allows it to function
remove = tk.Button(root, text="Remove", padx=10, pady=5, fg="white", bg="#263D42", command=remove)
remove.pack(padx=5, pady=20, side=tk.RIGHT)

for app in apps:
    label = tk.Label(frame, text=app)
    label.pack()


root.title("RunApps")


root.iconbitmap("C:/Users/Daniel/Documents/GitHub/oneHundredDaysOfCoding/Python/TaskRun")
root.mainloop()

# write to a text file to save data for reopen
with open("save.txt", "w") as f:
    for app in apps:
        f.write(app + ",")
