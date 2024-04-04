import { useState } from 'react'

import * as DropdownMenuRadix from '@radix-ui/react-dropdown-menu'

import style from './dropdownMenu.module.scss'

export const DropdownMenu = () => {
  const [bookmarksChecked, setBookmarksChecked] = useState(true)
  const [urlsChecked, setUrlsChecked] = useState(false)
  const [person, setPerson] = useState('pedro')

  return (
    <DropdownMenuRadix.Root>
      <DropdownMenuRadix.Trigger asChild>
        <button aria-label={'Customise options'} className={style.IconButton}>
          {/*<HamburgerMenuIcon />*/}
        </button>
      </DropdownMenuRadix.Trigger>

      <DropdownMenuRadix.Portal>
        <DropdownMenuRadix.Content className={style.DropdownMenuContent} sideOffset={5}>
          <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
            New Tab <div className={style.RightSlot}>⌘+T</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
            New Window <div className={style.RightSlot}>⌘+N</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Item className={style.DropdownMenuItem} disabled>
            New Private Window <div className={style.RightSlot}>⇧+⌘+N</div>
          </DropdownMenuRadix.Item>
          <DropdownMenuRadix.Sub>
            <DropdownMenuRadix.SubTrigger className={style.DropdownMenuSubTrigger}>
              More Tools
              <div className={style.RightSlot}>{/*<ChevronRightIcon />*/}</div>
            </DropdownMenuRadix.SubTrigger>
            <DropdownMenuRadix.Portal>
              <DropdownMenuRadix.SubContent
                alignOffset={-5}
                className={style.DropdownMenuSubContent}
                sideOffset={2}
              >
                <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
                  Save Page As… <div className={style.RightSlot}>⌘+S</div>
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
                  Create Shortcut…
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
                  Name Window…
                </DropdownMenuRadix.Item>
                <DropdownMenuRadix.Separator className={style.DropdownMenuRadixSeparator} />
                <DropdownMenuRadix.Item className={style.DropdownMenuItem}>
                  Developer Tools
                </DropdownMenuRadix.Item>
              </DropdownMenuRadix.SubContent>
            </DropdownMenuRadix.Portal>
          </DropdownMenuRadix.Sub>

          <DropdownMenuRadix.Separator className={style.DropdownMenuSeparator} />

          <DropdownMenuRadix.CheckboxItem
            checked={bookmarksChecked}
            className={style.DropdownMenuCheckboxItem}
            onCheckedChange={setBookmarksChecked}
          >
            <DropdownMenuRadix.ItemIndicator className={style.DropdownMenuItemIndicator}>
              {/*<CheckIcon />*/}
            </DropdownMenuRadix.ItemIndicator>
            Show Bookmarks <div className={style.RightSlot}>⌘+B</div>
          </DropdownMenuRadix.CheckboxItem>
          <DropdownMenuRadix.CheckboxItem
            checked={urlsChecked}
            className={style.DropdownMenuCheckboxItem}
            onCheckedChange={setUrlsChecked}
          >
            <DropdownMenuRadix.ItemIndicator className={style.DropdownMenuItemIndicator}>
              {/*<CheckIcon />*/}
            </DropdownMenuRadix.ItemIndicator>
            Show Full URLs
          </DropdownMenuRadix.CheckboxItem>

          <DropdownMenuRadix.Separator className={style.DropdownMenuSeparator} />

          <DropdownMenuRadix.Label className={style.DropdownMenuLabel}>
            People
          </DropdownMenuRadix.Label>
          <DropdownMenuRadix.RadioGroup onValueChange={setPerson} value={person}>
            <DropdownMenuRadix.RadioItem className={style.DropdownMenuRadioItem} value={'pedro'}>
              <DropdownMenuRadix.ItemIndicator className={style.DropdownMenuItemIndicator}>
                {/*<DotFilledIcon />*/}
              </DropdownMenuRadix.ItemIndicator>
              Pedro Duarte
            </DropdownMenuRadix.RadioItem>
            <DropdownMenuRadix.RadioItem className={style.DropdownMenuRadioItem} value={'colm'}>
              <DropdownMenuRadix.ItemIndicator className={style.DropdownMenuItemIndicator}>
                {/*<DotFilledIcon />*/}
              </DropdownMenuRadix.ItemIndicator>
              Colm Tuite
            </DropdownMenuRadix.RadioItem>
          </DropdownMenuRadix.RadioGroup>

          <DropdownMenuRadix.Arrow className={style.DropdownMenuArrow} />
        </DropdownMenuRadix.Content>
      </DropdownMenuRadix.Portal>
    </DropdownMenuRadix.Root>
  )
}
