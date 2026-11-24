# StudyBook subjects

Course content for the StudyBook Minecraft mod. The mod checks here every time a book is opened and downloads new and changed subjects.

- One folder per subject (`math/`, ...). Format: see `docs/content-format.md` in the mod's source.
- Publishing is automatic: on every push (uploads on github.com included) the **Publish** action rebuilds `index.json` and raises the version of each subject whose files changed. You don't need to touch `index.json` or the version.

## Book textures

Each subject can have its own book: `<subject>/book_gui/<subject>_gui.png`, e.g. `math/book_gui/math_gui.png`.

- Same layout as the default book: **272×178** pixels, or a bigger copy with the same shape (544×356, 816×534, ...) for more detail. Drawn with sharp pixels.
- Start from the file that's already there: it's the default book.
- A missing file or a wrong shape means the default book is used.
- To give a new subject a texture, add the `book_gui` folder inside that subject's folder with `<subject>_gui.png` in it.
