---
title: "Dropdown"
description: "The Dropdown Component."
category: owo-ui
---

The dropdown component creates a dropdown menu with various entries such as buttons, checkboxes, and nested dropdowns. It supports customizable entries and various sizing and alignment options.

## Parameters

- `close-when-not-hovered`: Whether to automatically close the dropdown when the mouse is not hovering over it.
- `entries`: The entries of the dropdown menu.
- `padding`: The padding around the dropdown entries.
- `surface`: The background surface of the dropdown.
- `horizontal-alignment`: The horizontal alignment of the dropdown entries.
- `vertical-alignment`: The vertical alignment of the dropdown entries.
- `allow-overflow`: Whether to allow the dropdown entries to overflow the bounds of the dropdown.

## Examples

::code-group
```java [Dropdown.java]
Components.dropdown()
    .button(Text.literal("Option 1"), button -> {
        // Handle button click event
    })
    .checkbox(Text.literal("Option 2"), false)
    .nested(Text.literal("Submenu"), submenu -> {
        submenu.button(Text.literal("Submenu Option"), button -> {
            // Handle submenu button click event
        });
    })
    .closeWhenNotHovered(true)
    .padding(Insets.of(5))
    .surface(Surface.TOOLTIP)
```

```xml [dropdown.xml]
<dropdown>
    <close-when-not-hovered>true</close-when-not-hovered>
    <entries>
        <button>
            <text>Option 1</text>
        </button>
        <checkbox>
            <text>Option 2</text>
            <checked>false</checked>
        </checkbox>
        <nested name="Submenu" translate="false">
            <button>
                <text>Submenu Option</text>
            </button>
        </nested>
    </entries>
    <padding>
        <all>5</all>
    </padding>
    <surface>
        <tooltip/>
    </surface>
</dropdown>
```
::
