# StudyBook subjects

Course content for the StudyBook Minecraft mod. The mod checks here every time a book is opened and downloads new and changed subjects.

- One folder per subject (`math/`, ...). Format: see `docs/content-format.md` in the mod's source.
- Publishing is automatic: on every push (uploads on github.com included) the **Publish** action rebuilds `index.json` and raises the version of each subject whose files changed. You don't need to touch `index.json` or the version.

## Book art

Each subject can have its own book art in `<subject>/book_gui/`:

- `<subject>_gui.png`: the **item icon** of a book named after the subject (e.g. `math/book_gui/math_gui.png`). Square, usually 16×16 (32×32 etc. also work). Without it the book looks like a normal book.
- `<subject>_book.png` (optional): the **open book** background. Same layout as the default book: 272×178, or a bigger copy with the same shape (544×356, ...). Without it the default book is used.

Both download like the lessons: upload, and they show up the next time the book is opened. A wrong size means the default is used.
