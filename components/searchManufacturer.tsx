"use client";

import { SearchManuFacturerProps } from '@/types';
import Image from 'next/image';
import React, { useState, Fragment } from 'react'

import { manufacturers } from '@/constants';

import { Combobox, Transition } from '@headlessui/react'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
function SearchManuFacturer(
    {
        manufacturer,
        setManufacturer
    }: SearchManuFacturerProps
) {
    const [query, setQuery] = useState("");
    // filter data :
    const filtredManufacturer = query === ""
        ? manufacturers
        : manufacturers.filter(
            (item) => (
                item.toLowerCase()
                    .replace(/\s+/g, "")
                    .includes(
                        query.toLowerCase()
                            .replace(/\s+/g, "")
                    )
            )
        )



    return (
        <div className='search-manufacturer'>
            <Combobox value={manufacturer} onChange={setManufacturer}>
                <div className="relative mt-1 w-full">
                    <Combobox.Button className="absolute top-[14px]">
                        <Image
                            src="/car-logo.svg"
                            width={20}
                            height={20}
                            alt='Car-logo'
                        />
                    </Combobox.Button>
                    <Combobox.Input
                        className="search-manufacturer__input"
                        placeholder='Volkswagen'
                        displayValue={(manufacturer: string) => manufacturer}
                        onChange={(e) => setQuery(e.target.value)}
                    />
                    <Transition
                        as={Fragment}
                        leave='transition ease-in duration-100'
                        leaveFrom='opacity-100'
                        leaveTo='opacity-0'
                        afterLeave={() => setQuery("")}
                    >
                        <Combobox.Options>
                            {
                                filtredManufacturer.length === 0 &&
                                    query !== ""
                                    ?
                                    (
                                        <Combobox.Option
                                            className="search-manufacturer__option"
                                            value={query}>
                                            No option "{query}"
                                        </Combobox.Option>
                                    ) : (
                                        filtredManufacturer.map(
                                            (item: String) => (
                                                <Combobox.Option
                                                    className={
                                                        ({ active }) => `
                                    relative search-manufacturer__option
                                    ${active ? 'bg-primary-blue text-white' :
                                                                'text-gray-900'
                                                            }`
                                                    }
                                                    value={query}
                                                    key={item}
                                                >
                                                    {item}
                                                </Combobox.Option>
                                            )
                                        )
                                    )
                            }

                        </Combobox.Options>
                    </Transition>
                </div>
            </Combobox>
        </div>

    )
}

export default SearchManuFacturer;