"use client";
import React, { useRef, useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-java";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/ext-language_tools";
import "ace-builds/src-noconflict/ext-beautify";
import beautify from "js-beautify";

export default function AuditPage() {
  const [contracts, setContracts] = useState([]);

  const onChange = (value: string) => {
    console.log(value);
  };

  const formSchema = z.object({
    yourTelegram: z
      .string()
      .min(3, {
        message: "Your telegram is required and at least 3 characters",
      })
      .max(50),
    socials: z.string().min(3).max(150),
    projectName: z.string().min(3).max(100),
    website: z.string().min(10).max(150),
    projectTelegram: z.string().min(3).max(50),
    chain: z.string().min(3).max(50),
    contract: z.string().min(3).max(250),
    additional: z.string(),
  });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      additional: "",
      chain: "",
      contract: "",
      projectName: "",
      projectTelegram: "",
      socials: "",
      website: "",
      yourTelegram: "",
    },
  });

  const getDownloads = async (website: string) => {
    // axios.get("/api/getCounts").then((res) => {
    //   const contractCount = res.data.response;

    //   for (let index = 1; index <= contractCount; index++) {
    //     axios.get("/api/getDownloads", { params: { index } }).then((res) => {
    //       const text = navigator.clipboard.readText().then((res) => {
    //         if (res) {
    //           setCode(
    //             beautify(`${res}`, {
    //               indent_size: "2",
    //               indent_char: " ",
    //               max_preserve_newlines: "500",
    //               preserve_newlines: true,
    //               keep_array_indentation: false,
    //               break_chained_methods: false,
    //               indent_scripts: "normal",
    //               brace_style: "expand",
    //               space_before_conditional: true,
    //               unescape_strings: false,
    //               jslint_happy: false,
    //               end_with_newline: false,
    //               wrap_line_length: "80",
    //               indent_inner_html: true,
    //               comma_first: false,
    //               e4x: false,
    //             })
    //           );
    //         }
    //       });
    //     });
    //   }
    // });

    axios.get("/api/getDownloads?url=" + website + "#code").then((response) => {
      setContracts(response.data.contracts);

      //   const text = navigator.clipboard.readText().then((res) => {

      //     if (res) {
      //       setCode(
      //         beautify(`${res}`, {
      //           indent_size: 2,
      //           indent_char: " ",
      //           max_preserve_newlines: 500,
      //           preserve_newlines: true,
      //           keep_array_indentation: false,
      //           break_chained_methods: false,

      //           brace_style: "expand",
      //           space_before_conditional: true,
      //           unescape_strings: false,
      //           jslint_happy: false,
      //           end_with_newline: false,
      //           wrap_line_length: 80,
      //           comma_first: false,
      //           e4x: false,
      //         })
      //       );
      //       navigator.clipboard.writeText("");
      //     }
      //   });
    });
  };

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof formSchema>) {
    getDownloads(values.contract);
  }

  return (
    <div className="w-full h-screen  flex flex-col items-center justify-center ">
      <div>
        <h3 className="text-white font-bold text-4xl mb-8 mt-20">
          GetYour Audit
        </h3>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
          <div className="flex w-full space-x-4 ">
            <FormField
              control={form.control}
              name="yourTelegram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Your Telegram @{" "}
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your Telegram @"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    This is your telegram address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="socials"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Socials <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Telegram Group"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    <span className="w-[400px] flex flex-wrap">
                      At least one of your projects Socials like your X/Twitter
                      link, LinkedIn or something similar
                    </span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full space-x-4 ">
            <FormField
              control={form.control}
              name="projectName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Project Name <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Name"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    This is your project name
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="website"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Website <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Website"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    <span className="w-[400px]">Your website</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full space-x-4 ">
            <FormField
              control={form.control}
              name="projectTelegram"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Project Telegram{" "}
                    <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Project Telegram"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    This is your project telegram
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="chain"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Chain <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Chain"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    <span className="w-[400px]">Token chain</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="flex w-full space-x-4 ">
            <FormField
              control={form.control}
              name="contract"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Contract <span className="text-xs text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Contract"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    Contract address
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="additional"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white uppercase">
                    Additional
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Additional information"
                      {...field}
                      className="w-[400px] "
                    />
                  </FormControl>
                  <FormDescription className="text-gray-300">
                    <span className="w-[400px]">Additional information</span>
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="text-center text-blue-100 text-lg flex flex-col space-y-4">
            <p>Please make sure to pay the Fee ($600) to</p>
            <p>0xb33c6D716aACc172d0BEE2C2Cf4c31fA48E94417</p>
            <p>We accept USDT on BSC and ETH</p>
            <p>
              *please note, if your Contract is way above standard, it may be
              more expensive
            </p>
          </div>

          <Button type="submit" className="bg-blue-500 hover:bg-blue-700 w-40">
            Submit
          </Button>
        </form>
      </Form>
      {contracts.length > 0 &&
        contracts.map((contract, index) => (
          <div className="w-1/2 mt-4" key={index}>
            <AceEditor
              theme="github"
              value={`${contract}`}
              name="UNIQUE_ID_OF_DIV"
              width="100%"
              editorProps={{ $blockScrolling: true }}
              setOptions={{
                enableBasicAutocompletion: false,
                enableLiveAutocompletion: false,
                enableSnippets: false,
                showLineNumbers: true,
                tabSize: 2,
              }}
            />
          </div>
        ))}
    </div>
  );
}
