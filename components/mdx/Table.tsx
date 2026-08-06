"use client";

import type {
   TableHTMLAttributes,
   TdHTMLAttributes,
   ThHTMLAttributes,
} from "react";
import { forwardRef } from "react";

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
   caption?: string;
}

export interface ThProps extends ThHTMLAttributes<HTMLTableCellElement> {}
export interface TdProps extends TdHTMLAttributes<HTMLTableCellElement> {}

const Table = forwardRef<HTMLTableElement, TableProps>(
   ({ caption, children, className = "", ...props }, ref) => {
      return (
         <div className="overflow-x-auto my-6 rounded-lg border border-subtle/50">
            <table
               ref={ref}
               className={`w-full text-sm ${className}`}
               {...props}
            >
               {caption && <caption className="sr-only">{caption}</caption>}
               {children}
            </table>
         </div>
      );
   },
);

Table.displayName = "Table";

const Thead = forwardRef<
   HTMLTableSectionElement,
   TableHTMLAttributes<HTMLTableSectionElement>
>(({ children, className = "", ...props }, ref) => (
   <thead ref={ref} className={`bg-surface ${className}`} {...props}>
      {children}
   </thead>
));
Thead.displayName = "Thead";

const Tbody = forwardRef<
   HTMLTableSectionElement,
   TableHTMLAttributes<HTMLTableSectionElement>
>(({ children, className = "", ...props }, ref) => (
   <tbody
      ref={ref}
      className={`divide-y divide-subtle/50 ${className}`}
      {...props}
   >
      {children}
   </tbody>
));
Tbody.displayName = "Tbody";

const Tr = forwardRef<
   HTMLTableRowElement,
   TableHTMLAttributes<HTMLTableRowElement>
>(({ children, className = "", ...props }, ref) => (
   <tr ref={ref} className={`${className}`} {...props}>
      {children}
   </tr>
));
Tr.displayName = "Tr";

const Th = forwardRef<HTMLTableCellElement, ThProps>(
   ({ children, className = "", ...props }, ref) => (
      <th
         ref={ref}
         className={`px-4 py-3 text-left font-semibold text-body bg-surface ${className}`}
         {...props}
      >
         {children}
      </th>
   ),
);
Th.displayName = "Th";

const Td = forwardRef<HTMLTableCellElement, TdProps>(
   ({ children, className = "", ...props }, ref) => (
      <td
         ref={ref}
         className={`px-4 py-3 text-body/90 bg-page ${className}`}
         {...props}
      >
         {children}
      </td>
   ),
);
Td.displayName = "Td";

export const TableComponents = {
   Table,
   Thead,
   Tbody,
   Tr,
   Th,
   Td,
};

export { Table, Tbody, Td, Th, Thead, Tr };

export default TableComponents;
