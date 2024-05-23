import { Icon, createIcon } from "@chakra-ui/react";

export default function CourseText({ color = "#225CF3", ...rest }) {
  return (
    <Icon viewBox="0 0 17 17" fill="none" {...rest}>
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4544 1.83337C10.6885 1.83338 10.9184 1.89499 11.1211 2.01202C11.3238 2.12904 11.4921 2.29735 11.6091 2.50004H12.4544C12.808 2.50004 13.1472 2.64052 13.3972 2.89056C13.6473 3.14061 13.7878 3.47975 13.7878 3.83337V11.8334C13.7878 12.7174 13.4366 13.5653 12.8115 14.1904C12.1863 14.8155 11.3385 15.1667 10.4544 15.1667H4.45443C4.10081 15.1667 3.76167 15.0262 3.51162 14.7762C3.26157 14.5261 3.12109 14.187 3.12109 13.8334V3.83337C3.12109 3.47975 3.26157 3.14061 3.51162 2.89056C3.76167 2.64052 4.10081 2.50004 4.45443 2.50004H5.29976C5.41678 2.29735 5.58509 2.12904 5.78778 2.01202C5.99047 1.89499 6.22038 1.83338 6.45443 1.83337H10.4544ZM5.12109 3.83337H4.45443V13.8334H10.4544C10.9849 13.8334 11.4936 13.6227 11.8686 13.2476C12.2437 12.8725 12.4544 12.3638 12.4544 11.8334V3.83337H11.7878C11.7878 4.187 11.6473 4.52613 11.3972 4.77618C11.1472 5.02623 10.808 5.16671 10.4544 5.16671H6.45443C6.10081 5.16671 5.76167 5.02623 5.51162 4.77618C5.26157 4.52613 5.12109 4.187 5.12109 3.83337ZM11.2798 6.75271C11.4047 6.87773 11.475 7.04726 11.475 7.22404C11.475 7.40082 11.4047 7.57036 11.2798 7.69537L7.97976 10.9954C7.85474 11.1204 7.6852 11.1906 7.50843 11.1906C7.33165 11.1906 7.16211 11.1204 7.03709 10.9954L5.62376 9.58071C5.50523 9.45449 5.44046 9.28711 5.44315 9.11399C5.44584 8.94086 5.51578 8.77558 5.63817 8.6531C5.76056 8.53063 5.92579 8.46057 6.09891 8.45776C6.27204 8.45495 6.43946 8.5196 6.56576 8.63804L7.50909 9.58071L10.3371 6.75271C10.4621 6.62773 10.6317 6.55752 10.8084 6.55752C10.9852 6.55752 11.1547 6.62773 11.2798 6.75271ZM10.4544 3.16671H6.45443V3.83337H10.4544V3.16671Z"
        fill="#04102D"
      />
    </Icon>
  );
}